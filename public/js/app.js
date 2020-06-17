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

      this.showIndexEditForm = null
      this.showIndexDetails = null

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

      this.editOrg = function(org) {
        $http(
          {
            method: 'PUT',
            url: '/resources/' + org._id,
            data:
              {
                organization: this.updatedOrganization,
                website: this.updatedUrl,
                donationMethod: this.updatedDonationMethod,
                bipocFounded: this.updatedBipocFounded,
                lgbtqiaFounded: this.updatedLgbtqiaFounded,
                missionStatement: this.updatedMissionStatement,
                donated: this.updatedDonated,
                donationAmount: this.updatedDonation
              }
          }
            ).then(
              function(response) {
                controller.getOrgs()
            },
              function(error) {
                console.log(error);
              }
          )
      }

      this.deleteOrg = function(org) {
        $http(
          {
            method: 'DELETE',
            url: '/resources/' + org._id
          }
        ).then(
          function(response) {
            controller.getOrgs()
          },
          function(error) {
            console.log(error);
          }
        )
      }

      this.createOrg = function() {
        $http(
          {
            method: 'POST',
            url: '/resources',
            data:
            {
              organization: this.organization,
              website: this.website,
              donationMethod: this.donationMethod,
              bipocFounded: this.bipocFounded,
              lgbtqiaFounded: this.lgbtqiaFounded,
              missionStatement: this.missionStatement,
              donated: this.donated,
              donationAmount: this.donationAmount
            }
          }
        ).then(
          function(response) {
              console.log(response);
          }, function(error) {
              console.log(error);
          }
        )
      }

  }])
