import type { Schema, Attribute } from '@strapi/strapi';

export interface NullEvent extends Schema.Component {
  collectionName: 'components_null_events';
  info: {
    displayName: 'Event';
    icon: 'attachment';
  };
  attributes: {
    title: Attribute.String;
    exist: Attribute.Boolean;
    body: Attribute.Blocks;
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'null.event': NullEvent;
    }
  }
}
