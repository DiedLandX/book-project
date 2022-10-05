package books.users

import books.HttpService
import books.auth.AuthHttpService
import pdi.jwt.{Jwt, JwtAlgorithm, JwtClaim}
import zhttp.http.*
import zhttp.http.Middleware.bearerAuth
import zio.json.*
import books.IDs.*

import java.time.Instant

class UserHttpService extends HttpService {

  def userAuth: UHttpApp = Http.collect[Request] {
    case Method.GET -> !! / "user" / email =>
      Response.json(User.fakeUser.toJson)

  } @@ bearerAuth(AuthHttpService.jwtDecode(_).isDefined)

  def userUnauth: UHttpApp = Http.collect[Request] {
    case Method.POST -> !! / "user" / name =>
      Response.text(s"not implemented yet")
  }

  def endpoints: UHttpApp = userAuth ++ userUnauth

}
