
class nodejs {


 
  package { "nodejs":
    ensure => present,
    notify => Package['npm'],
  }

  package { "npm":
    ensure => present,
  }

  package { 'express':
    ensure   => present,
    provider => npm,
    require  => Package['npm'],
  }

  package { 'zmq':
    ensure   => present,
    provider => npm,
    require  => Package['npm'],
  }

}
