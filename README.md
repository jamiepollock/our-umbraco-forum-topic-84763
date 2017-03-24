The majority of the code is in `~/App_Plugins/CustomGridEditors/`

Which contains two views and controllers:

 - One for the Grid Editor
 - One for the tags dialog

A package.manifest which wires in the JS controllers and also includes configuration for the grid editors. Although this can also be moved over to `~/Config/grid.editors.config.js`.

The only C# addition is an ApiController which grabs tags of a given group as there is no AngularJS resource for this (as far as I'm aware).

Finally there is a Razor view for rendering the grid editor on the frontend

Built against Umbraco v7.5.11