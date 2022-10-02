package books.groups

import books.IDs.UserID

import java.util.UUID

opaque type GroupID = UUID

case class Group(id: GroupID, users: List[UserID])
