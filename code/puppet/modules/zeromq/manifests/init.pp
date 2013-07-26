
class zeromq {

  package { 'libzmq-dev':
    ensure => installed,
    notify => Exec['npm-zmq'],
  }



}
