import books.HttpService
import books.auth.AuthHttpService
import books.users.UserHttpService
import io.netty.handler.codec.http.{CombinedHttpHeaders, DefaultHttpHeaders, HttpHeaderNames, HttpHeaders}
import zhttp.http.{Headers, Middleware, Request, Response}
import zhttp.http.middleware.Cors.CorsConfig
import zhttp.service.Server
import zio.ZIOAppDefault

object Main extends ZIOAppDefault :

  private val corsConfig: CorsConfig = CorsConfig(
    anyOrigin = true,
    anyMethod = true,
    allowedHeaders = Some(
      Set(HttpHeaderNames.CONTENT_TYPE, HttpHeaderNames.AUTHORIZATION, HttpHeaderNames.ORIGIN).map(_.toString)
    ),
  )

  private val middleware = Middleware.cors(corsConfig) ++ Middleware.dropTrailingSlash
  val endpoints =
    List(AuthHttpService(), UserHttpService())
      .map(_.endpoints).reduce(_ ++ _) @@ middleware

  override val run =
    println(s"Starting server...")
    Server.start(8090, endpoints).exitCode
