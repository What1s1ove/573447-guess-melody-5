import * as React from 'react';

type ChangeEvent<T> = React.ChangeEvent<T>;

type InputChangeEvent = ChangeEvent<HTMLInputElement>;

type FormEvent = React.FormEvent<HTMLFormElement>;

type FormSubmitCb = (evt: FormEvent) => void;

export { ChangeEvent, InputChangeEvent, FormEvent, FormSubmitCb };
