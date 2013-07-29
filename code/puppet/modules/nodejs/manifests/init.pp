
class nodejs {

  file { "/home/vagrant/.profile":
    ensure => present,
    source => "puppet:///modules/nodejs/dot_profile",
    owner  => vagrant,
    group  => vagrant,
    mode   => 644,
  }
 
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
