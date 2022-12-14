import { strings } from '@angular-devkit/core';
import { apply, mergeWith, Rule, SchematicContext, template, Tree, url } from '@angular-devkit/schematics';
import { Schema } from './schema';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function helloWorld(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {

    const sourceTemplates = url('./files');

    console.log(sourceTemplates);
    

    const sourceParameterizedTemplates = apply(sourceTemplates, [
      template({
        ..._options,
        ...strings 
      })
    ])


    return mergeWith(sourceParameterizedTemplates)(tree, _context);
  };
}
