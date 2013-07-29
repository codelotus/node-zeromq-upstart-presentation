
class zeromq {

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
 
  package { 'libzmq3-dev':
    ensure => installed,
  }



}
