
class apt_ppa {

  exec { 'apt-update':
    command     => "apt-get update",
    path        => ["/usr/bin", "/usr/sbin"],
  }

  apt::key { 'chris-lea':
    key        => 'C7917B12',
    key_source => 'http://keyserver.ubuntu.com:11371/pks/lookup?op=get&search=0xB9316A7BC7917B12',
  }

  apt::ppa { 'ppa:chris-lea/zeromq':
  }

  apt::ppa { 'ppa:chris-lea/node.js':
  }


}
