package books

import zio.json.{JsonDecoder, JsonEncoder}

import java.util.UUID

object IDs:

  def randomUUID() = UUID.randomUUID()

  object UserID extends Opaque[UUID]
  type UserID = UserID.OpaqueType


