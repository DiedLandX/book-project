package books
import zhttp.http.*

trait HttpService {
  def endpoints: UHttpApp
}
