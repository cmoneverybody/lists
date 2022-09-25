/**
 * Варианты видимости элемента.
 * @variant visible Виден всегда.
 * @variant hidden Спрятан всегда.
 * @variant onhover Отборажается при наведении курсора мыши.
 * @author Колесов В.А.
 */
export type TVisibility = "visible" | "hidden" | "onhover";

/**
 * Варианты настройки размеров маркера
 * @variant content-xl Используется для размещения маркера в случае, когда содержимое записи должно быть расположено на нескольких строках.
 * @variant content-xs Используется для размещения маркера в случае, когда содержимое записи должно быть расположено в одной строке.
 * @variant image-l Используется для размещения маркера рядом с изображением размера "l".
 * @variant image-m Используется для размещения маркера рядом с изображением размера "m".
 * @variant image-mt Используется для размещения маркера рядом с изображением размера "mt".
 * @variant image-s Используется для размещения маркера рядом с изображением размера "s".
 */
export type TMarkerSize =
  | "image-l"
  | "image-m"
  | "image-mt"
  | "image-s"
  | "content-xl"
  | "content-xs";

/**
 * Варианты курсора мыши.
 * @variant pointer указатель.
 * @variant auto автоматический выбор.
 */
export type TCursor = "pointer" | "auto";

/**
 * Варианты значений для стиля цвета рамки вокруг записи.
 * @variant default
 * @variant danger
 */
export type TBorderStyle = "default" | "danger";

/**
 * Общая линейка размеров. Используется для скруглений, отступов.
 */
export type TSize =
  | "null"
  | "3xs"
  | "2xs"
  | "xs"
  | "s"
  | "m"
  | "l"
  | "xl"
  | "2xl"
  | "3xl";

/**
 * Допустимые значения цветовых стилей шрифта.
 */
export type TFontColorStyle =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "unaccented"
  | "link"
  | "label"
  | "info"
  | "default";

/**
 * Допустимые значения начертания шрифта.
 * @variant default начертание, которое задается при помощи переменной темы оформления
 * @variant normal нормальное начертание
 * @variant bold полужирное начертание
 */
export type TFontWeight = "default" | "normal" | "bold";
