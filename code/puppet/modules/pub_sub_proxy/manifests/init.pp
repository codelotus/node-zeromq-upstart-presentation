
class pub_sub_proxy {

  file { "/etc/init/pub_sub_frontend.conf":
    ensure => present,
    source => "puppet:///modules/pub_sub_proxy/pub_sub_frontend.conf",
    owner  => root,
    group  => root,
    mode   => 644,
  }


  file { "/etc/init/pub_sub_proxy.conf":
    ensure => present,
    source => "puppet:///modules/pub_sub_proxy/pub_sub_proxy.conf",
    owner  => root,
    group  => root,
    mode   => 644,
  }


  file { "/etc/init/pub_sub_worker.conf":
    ensure => present,
    source => "puppet:///modules/pub_sub_proxy/pub_sub_worker.conf",
    owner  => root,
    group  => root,
    mode   => 644,
  }

}
