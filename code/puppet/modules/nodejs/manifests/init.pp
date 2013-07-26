
class nodejs {

  exec { 'apt-update':
    command => "apt-get update",
    path => ["/usr/bin", "/usr/sbin"],
  }
  
  apt::ppa { 'ppa:chris-lea/node.js':
    notify => Package['nodejs'],
  }

  package { "nodejs":
    ensure => present,
  }

}
