
class push_pull {

  file { "/etc/init/push_pull_ventilator.conf":
    ensure => present,
    source => "puppet:///modules/push_pull/push_pull_ventilator.conf",
    owner  => root,
    group  => root,
    mode   => 644,
  }


  file { "/etc/init/push_pull_worker.conf":
    ensure => present,
    source => "puppet:///modules/push_pull/push_pull_worker.conf",
    owner  => root,
    group  => root,
    mode   => 644,
  }


  file { "/etc/init/push_pull_sink.conf":
    ensure => present,
    source => "puppet:///modules/push_pull/push_pull_sink.conf",
    owner  => root,
    group  => root,
    mode   => 644,
  }


}
