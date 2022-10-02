package books.auth

import books.HttpService
import books.users.User
import pdi.jwt.{Jwt, JwtAlgorithm, JwtClaim}
import zhttp.http.*
import zhttp.http.Middleware.bearerAuth
import zio.*
import zio.json.*

import java.nio.charset.Charset
import java.time.Instant

class AuthHttpService extends HttpService {

  import AuthHttpService._

  case class Credentials(username: String, password: String)

  given JsonDecoder[Credentials] = DeriveJsonDecoder.gen

  def login: UHttpApp = Http.collectZIO[Request] {
    case req@(Method.POST -> !! / "login") =>
      payload[Credentials](req) { creds =>
        if (creds.password.reverse.hashCode == creds.username.hashCode)
          Response.json(jwtEncode(User.fakeUser))
        else
          Response.text("Invalid username or password.").setStatus(Status.Unauthorized)
      }
  }

  def endpoints: UHttpApp = login

  def payload[A](req: Request)(fn: A => Response)(using JsonDecoder[A]): UIO[Response] =
    req.data.toByteBuf.map(_.toString(Charset.defaultCharset())).foldZIO(
      failure = throwable => ZIO.succeed(Response.text(throwable.getMessage).setStatus(Status.InternalServerError)),
      success = { body =>
        val resp = body
          .fromJson[A]
          .fold(
            err => Response.text(err).setStatus(Status.BadRequest),
            decoded => fn(decoded)
          )
        ZIO.succeed(resp)
      }
    )

}


object AuthHttpService {

  private val SECRET_KEY = "quite secret"

  private def jwtEncode(user: User): String =
    val userId = user.id.toString
    val claim = JwtClaim(
      expiration = Some(Instant.now.plusSeconds(60 * 60 * 24).getEpochSecond),
      issuedAt = Some(Instant.now.getEpochSecond),
      subject = Some(userId),
      content = s"user:$userId",
    )
    Jwt.encode(claim, SECRET_KEY, JwtAlgorithm.HS512)


  def jwtDecode(token: String): Option[JwtClaim] =
    Jwt.decode(token, SECRET_KEY, Seq(JwtAlgorithm.HS512)).toOption

}

