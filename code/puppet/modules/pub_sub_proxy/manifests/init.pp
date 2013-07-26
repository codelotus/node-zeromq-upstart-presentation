
class pub_sub_proxy {


  exec { "npm-frontend":
    cwd     => "/vagrant/pub_sub_proxy/frontend"
    command => "npm install",
    path    => ["/usr/bin", "/usr/sbin"],
    creates => "/vagrant/pub_sub_proxy/frontend",
  }

}
