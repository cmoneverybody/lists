import {
  TMarkerSize,
  TVisibility,
  TCursor,
  TBorderStyle,
  TSize,
  TFontColorStyle,
  TFontWeight
} from "./TGeneral";

/**
 * Интерфейс опций для отображения маркера
 */
export interface IMarkerProps {
  /**
   * @cfg Видимость маркера
   */
  markerVisible?: boolean;
  /**
   * @cfg Размер маркера
   */
  markerSize?: TMarkerSize;
  /**
   * @cfg Класс, используемый при формировании css-класса маркера
   * [NEW] Отчётность использует кастомный размер строки (из-за увеличенного по высоте поля ввода), из-за чего не вписываются в стандартные отступы.
   */
  markerClassName?: string;
}

/**
 * Интерфейс опций для отображения чекбокса
 */
export interface ICheckboxProps {
  /**
   * @cfg Видмость чекбокса
   */
  checkboxVisibility?: TVisibility;
  /**
   * @cfg Отображаемое значение чекбокса
   */
  checkboxValue?: true | false | null;
}

/**
 * Интерфейс опций для отображения курсора
 */
export interface ICursorProps {
  /**
   * @cfg Курсор мыши, отображаемый при наведении на элемент
   */
  cursor?: TCursor;
}

/**
 * Интерфейс опций для отображения тени
 */
export interface IShadowProps {
  /**
   * @cfg Видимость тени
   */
  shadowVisibility?: TVisibility;
}

/**
 * Интерфейс опций для отображения обводки
 */
export interface IBorderProps {
  /**
   * @cfg Видимость обводки
   */
  borderVisibility?: TVisibility;
  /**
   *  @cfg Стиль обводки
   */
  borderStyle?: TBorderStyle;
}

/**
 * Интерфейс опций для отображения скругления
 */
export interface IRoundAnglesProps {
  /**
   * @cfg Размер скругления нижнего левого угла
   */
  roundAngleBL?: TSize;
  /**
   * @cfg Размер скругления нижнего правого угла
   */
  roundAngleBR?: TSize;
  /**
   * @cfg Размер скругления верхнего левого угла
   */
  roundAngleTL?: TSize;
  /**
   * @cfg Размер скругления верхнего правого угла
   */
  roundAngleTR?: TSize;
}

/**
 * Интерфейс опций для отображения внутренних отступов
 */
export interface IPaddingProps {
  /**
   * @cfg Размер верхнего внутреннего отступа
   */
  paddingTop?: TSize;
  /**
   * @cfg Размер нижнего внутреннего отступа
   */
  paddingBottom?: TSize;
  /**
   * @cfg Размер левого внутреннего отступа
   */
  paddingLeft?: TSize;
  /**
   * @cfg Размер правого внутреннего отступа
   */
  paddingRight?: TSize;
}

/**
 * Интерфейс опций для настройки шрифта
 */
export interface IFontProps {
  /**
   * @cfg Размер шрифта
   */
  fontSize?: string;
  /**
   * @cfg Цветовой стиль шрифта
   */
  fontColorStyle?: TFontColorStyle;
  /**
   * @cfg Начертание шрифта
   */
  fontWeight?: TFontWeight;
}
