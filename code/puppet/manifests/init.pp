
include base
include nodejs
include zeromq

Class['base']   ->
Class['nodejs'] ->
Class['zeromq']

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
