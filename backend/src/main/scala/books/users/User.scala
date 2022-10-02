package books.users

import java.util.UUID
import zio.json._
import books.IDs._


case class User(id: UserID, email: String, name: String)

object User:
  given JsonDecoder[User] = DeriveJsonDecoder.gen[User]
  given JsonEncoder[User] = DeriveJsonEncoder.gen[User]

  // temp user
  val fakeUser: User = User(UserID(randomUUID()), "email@email.com", "Test User")
