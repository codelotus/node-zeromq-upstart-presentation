
include base
include apt_ppa
include zeromq
include nodejs
include pub_sub_proxy
include push_pull

Class['base']          ->
Class['apt_ppa']       ->
Class['zeromq']        ->
Class['nodejs']        ->
Class['pub_sub_proxy'] ->
Class['push_pull']

class base {

  # Needed to resolve misleading "mount files" error
  file { "/etc/puppet/files":
    ensure => directory,
  }

  package {'curl':
    ensure => installed,
  }

  package {'finger':
    ensure => installed,
  }

  user { 'node':
    ensure => present,
  }
}

class { 'apt': 
  always_apt_update => true,
  disable_keys      => true,
}

