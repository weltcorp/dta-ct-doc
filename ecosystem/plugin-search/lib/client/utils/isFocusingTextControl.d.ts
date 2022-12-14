/**
 * Determines whether the user is currently focusing a text control.
 * In this case, the search plugin shouldn’t hijack any hotkeys because
 * the user might be typing into a text field, using type-ahead search
 * in a `select` element, etc.
 */
export declare const isFocusingTextControl: (target: EventTarget) => boolean;
