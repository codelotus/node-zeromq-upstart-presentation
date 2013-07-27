
include base
include zeromq
include nodejs
include pub_sub_proxy

Class['base']   ->
Class['zeromq'] ->
Class['nodejs'] ->
Class['pub_sub_proxy']

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
  always_apt_update => false,
  disable_keys      => true,
}
