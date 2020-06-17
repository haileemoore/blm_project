const app = angular.module("ResourcesApp", [])

app.controller('MainController',
  ['$http',
    function($http) {
      this.organization = ""
      this.website = ""
      this.donationMethod = ""
      this.bipocFounded = ""
      this.lgbtqiaFounded = ""
      this.missionStatement = ""
      this.donated = false
      this.donatedAmount = 0

      const controller = this

      this.getOrgs = function() {
        $http(
          {
            method: 'GET',
            url: '/resources'
          }).then((response) => {
            controller.orgs = response.data
              console.log(response);
          }, function(error) {
              console.log(error);
          })
      }

      
    this.getOrgs()
  }])
