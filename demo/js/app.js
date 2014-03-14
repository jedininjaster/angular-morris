angular.module('angularMorrisDemo', ['morris']).run(['$rootScope',
    function($scope) {

        console.log('running angular.morris')

        $scope.morrisLineConfig = {
            type: 'Line',
            data: [{
                year: '2008',
                value: 20
            }, {
                year: '2009',
                value: 10
            }, {
                year: '2010',
                value: 5
            }, {
                year: '2011',
                value: 5
            }, {
                year: '2012',
                value: 20
            }],
            xkey: 'year',
            ykeys: ['value'],
            labels: ['Value']
        }

        $scope.morrisAreaConfig = {
            type: 'Area',
            data: [{
                year: '2008',
                value: 20
            }, {
                year: '2009',
                value: 10
            }, {
                year: '2010',
                value: 5
            }, {
                year: '2011',
                value: 5
            }, {
                year: '2012',
                value: 20
            }],
            xkey: 'year',
            ykeys: ['value'],
            labels: ['Value']
        }

        $scope.morrisDonutConfig = {
            type: 'Donut',
            data: [{
                label: "Download Sales",
                value: 12
            }, {
                label: "In-Store Sales",
                value: 30
            }, {
                label: "Mail-Order Sales",
                value: 20
            }],
            xkey: 'year',
            ykeys: ['value'],
            labels: ['Value']
        }

        $scope.morrisBarConfig = {
            type: 'Bar',
            data: [{
                year: '2008',
                value: 20
            }, {
                year: '2009',
                value: 10
            }, {
                year: '2010',
                value: 5
            }, {
                year: '2011',
                value: 5
            }, {
                year: '2012',
                value: 20
            }],
            xkey: 'year',
            ykeys: ['value'],
            labels: ['Value']
        }

        //TODO: add all chart examples
        //TODO: add watchers

    }
])