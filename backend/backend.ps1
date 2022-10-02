param(
 [Parameter(Mandatory)]
 [ValidateSet('start','stop', 'build')]
  $feature
)

function Build-Docker {
  Write-Host "Building docker..."
  sbt assembly
  docker build -t books .
  docker tag books kaeblo/books:latest
  docker image push kaeblo/books
}

function Start-Backend {
  Write-Host "Starting backend..."
  docker run --name psql1 -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword --detach postgres:14.5
  docker run --name "books1" --detach -p 8090:8090 books
}

function Stop-Backend {
  Write-Host "Stopping backend..."
  docker stop psql1
  docker stop books1
  docker rm psql1
  docker rm books1
}


if($feature -eq "start") {
  Start-Backend
} elseif($feature -eq "stop") {
  Stop-Backend
} else {
  Build-Docker
}

