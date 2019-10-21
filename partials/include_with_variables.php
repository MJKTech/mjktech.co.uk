<?php 
function includeWithVariables($file, $variables = array()) {

    if(file_exists($file)) {
        // Extract variables in local scope
        extract($variables);
        // Include the file
        include($file);
    }
} 
?>