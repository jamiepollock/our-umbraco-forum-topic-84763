angular.module("umbraco")
    .controller("CustomGridEditors.TagBasedEditorController",
    function ($scope, $rootScope, $timeout) {
        $scope.setTags = function () {
            $scope.tagsPickerOverlay = {};
            if ($scope.control.editor.config.tagGroup) {
                $scope.tagsPickerOverlay.tagGroup = $scope.control.editor.config.tagGroup;
            }

            if ($scope.control.value) {
                $scope.tagsPickerOverlay.value = $scope.control.value;
            }

            $scope.tagsPickerOverlay.view = "/App_Plugins/CustomGridEditors/TagBasedDialog.View.html";
            $scope.tagsPickerOverlay.show = true;

            $scope.tagsPickerOverlay.submit = function (model) {
                var selectedTags = model.value;

                $scope.control.value = selectedTags;

                $scope.tagsPickerOverlay.show = false;
                $scope.tagsPickerOverlay = null;
            };

            $scope.tagsPickerOverlay.close = function (oldModel) {
                $scope.tagsPickerOverlay.show = false;
                $scope.tagsPickerOverlay = null;
            };
        };


        // Optional: Open Tag Dialog as soon as the grid control inits
        $timeout(function () {
            if ($scope.control.$initializing) {
                $scope.setTags();
            }
        }, 200);
    });