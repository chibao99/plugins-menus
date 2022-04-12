"use strict";

module.exports = {
  kind: "collectionType",
  collectionName: "menus",
  info: {
    displayName: "Menu",
    singularName: "menu",
    pluralName: "menus",
    tableName: "menus",
  },
  options: {
    draftAndPublish: false,
  },
  pluginOptions: {
    "content-manager": {
      visible: false,
    },
    "content-type-builder": {
      visible: false,
    },
  },
  attributes: {
    title: {
      type: "string",
      required: true,
    },
    slug: {
      type: "uid",
      targetField: "title",
      required: true,
    },
    order: {
      type: "integer",
      required: true,
      min: 1,
    },
    items: {
      type: "relation",
      relation: "oneToMany",
      target: "plugin::menus.menu-item",
      mappedBy: "root_menu",
    },
  },
};
