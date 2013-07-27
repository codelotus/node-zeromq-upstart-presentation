
class nodejs {

  exec { 'apt-update':
    command => "apt-get update",
    path => ["/usr/bin", "/usr/sbin"],
  }

  package { "python":
    ensure => installed,
  }
  
  package { "g++":
    ensure => installed,
  }

  package { "make":
    ensure => installed,
  }

  package { "checkinstall":
    ensure => installed,
  }
  
  apt::ppa { 'ppa:chris-lea/node.js':
    notify => Package['nodejs'],
  }

  package { "nodejs":
    ensure => present,
  }

  package { 'express':
    ensure   => present,
    provider => npm,
    require  => Package['nodejs'],
  }

  package { 'zmq':
    ensure   => present,
    provider => npm,
    require  => [
      Package['nodejs'],
      Package['libzmq-dev']
    ]
  }

}
