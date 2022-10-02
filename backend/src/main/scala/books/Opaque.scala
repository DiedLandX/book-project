package books

import zio.json.{JsonDecoder, JsonEncoder}

transparent trait Opaque[T]:
  opaque final type OpaqueType = T

  inline def apply(t: T): OpaqueType = t
  def unapply(ot: OpaqueType): Some[T] = Some(ot) // can't inline here =(
  inline def wrap[F[_]](ts: F[T]): F[OpaqueType] = ts
  extension (ot: OpaqueType) inline def value: T = ot

  given (using CanEqual[T, T]): CanEqual[OpaqueType, OpaqueType] = summon
  given (using JsonEncoder[T]): JsonEncoder[OpaqueType] = summon
  given (using JsonDecoder[T]): JsonDecoder[OpaqueType] = summon
end Opaque