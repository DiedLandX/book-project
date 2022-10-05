

lazy val core = (project in file(".")).settings(
  name := "books",

  version := "0.1",

  scalaVersion := "3.2.0",

  libraryDependencies ++= Seq(
    "io.d11" %% "zhttp" % "2.0.0-RC10",
    "com.github.jwt-scala" %% "jwt-zio-json" % "9.1.1",
    "dev.zio" %% "zio-json" % "0.3.0",
  ),

  run / fork := true,

  assembly / assemblyMergeStrategy := {
    case PathList("META-INF", "io.netty.versions.properties") => MergeStrategy.first
    case x =>
      val oldStrategy = (assembly / assemblyMergeStrategy).value
      oldStrategy(x)
  },

  assembly / assemblyJarName := "books.jar"
)
