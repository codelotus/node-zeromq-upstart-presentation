
include base
include zeromq
include nodejs

Class['base']   ->
Class['zeromq'] ->
Class['nodejs']

class base {
  # Needed to resolve misleading "mount files" error
  file { "/etc/puppet/files":
    ensure => directory,
  }
}

class { 'apt': 
  always_apt_update => false,
  disable_keys      => true,
}
