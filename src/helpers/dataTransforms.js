import {DRUPAL_URL} from "./constants";

export const column = (data) => ({
  id: data.id,
  size: data.field_column_size,
  text_size: data.field_column_text_size,
  content: data.field_column_content ? data.field_column_content.value : '',
  map: data.relationships ? data.relationships.field_maps[0] : '',
});

export const slide = (data) => ({
  id: data.id,
  backgroundColor: data.field_background_color,
  background_image: data.relationships.field_background_image ? DRUPAL_URL + data.relationships.field_background_image.uri.url : '',
  column: data.relationships.field_slide_column.map((col) => column(col)),
});

export const contentSections = (data) => ({
  id: data.id,
  content_id: data.field_id,
  title: data.field_title.value,
  styles: data.field_styles,
  columns: data.relationships.field_column.map((col) => column(col)),
  background_image: data.relationships.field_image_background ? DRUPAL_URL + data.relationships.field_image_background.uri.url : null,
  slideshow: data.relationships.field_slideshow ? data.relationships.field_slideshow.relationships.field_slides.map((slid) => slide(slid)) : '',
});

export const pagesWithContent = (data) => ({
  id: data.nodePage.id,
  title: data.nodePage.title,
  content_section: data.nodePage.relationships.field_section_text.map((content) => contentSections(content)),
});

export const webformForm = (data) => ({
  id: data.webformWebform.id,
  title: data.webformWebform.title,
  elements: JSON.stringify(data.webformWebform.elements)
});