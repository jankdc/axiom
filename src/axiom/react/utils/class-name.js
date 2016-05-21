import classnames from 'classnames';
import { breakpoints } from '../../sass';

const CLASS_NAMES_SETS = {
  global: (props) => {
    return classnames(
      breakpointClassName(props.hiddenUntil, ({ id }) => `ax-hidden-until--${id}`),
      breakpointClassName(props.visibleUntil, ({ id }) => `ax-visible-until--${id}`),
    );
  },
  text: (props) => {
    return classnames(
      {
        'ax-text--left': props.textLeft === true,
        'ax-text--center': props.textCenter === true,
        'ax-text--right': props.textRight === true,
        'ax-text--bold': props.textBold === true,
        'ax-text--weak': props.textWeak === true,
        'ax-text--break-none': props.textBreak === 'none',
        'ax-text--break-all': props.textBreak === 'all',
        'ax-text--break-word': props.textBreak === 'word',
        'ax-text--uppercase': props.textCase === 'upper',
        'ax-text--capitalize': props.textCase === 'capital',
        'ax-text--lowercase': props.textCase === 'lower',
        'ax-text--ellipsis': props.textEllipsis === true,
        [`ax-text--${props.textColor}`]: props.textColor,
      },
      breakpointClassName(props.textLeft, ({ id }) => `ax-text--left--${id}`),
      breakpointClassName(props.textCenter, ({ id }) => `ax-text--center--${id}`),
      breakpointClassName(props.textRight, ({ id }) => `ax-text--right--${id}`),
    );
  },
};

export function addDynamicClass(array, predicate, classCb) {
  const element = array.find(predicate);

  if (element) {
    return classCb(element);
  }
}

export function mergeClassNameSets(props = {}, classNameSets) {
  return classnames(
    props.className,
    ...classNameSets.map((set) => CLASS_NAMES_SETS[set](props)),
  );
}

export function breakpointClassName(value, classCb) {
  return addDynamicClass(breakpoints, ({ id }) => value === id, classCb);
}
