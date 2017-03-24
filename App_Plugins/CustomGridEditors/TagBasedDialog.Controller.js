angular.module("umbraco").controller("CustomGridEditors.TagBasedDialogsController", function ($scope, $http, umbRequestHelper) {
    $scope.tags = [];

    var url = "backoffice/api/TagPickerApi/Get";
    if ($scope.model.tagGroup) {
        url += "?tagGroup=" + $scope.model.tagGroup;
    }
    
    umbRequestHelper.resourcePromise(
        $http.get(url),
        'Failed to retrieve tags for tag picker at ' + url)
        .then(function (data) {
            $scope.tags = data;
        });
});