/* eslint-disable @typescript-eslint/ban-types */
import { KefasBaseProps } from "./kefasProps";
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As;
};

export type As<Props = any> = React.ElementType<Props>;

export type ExtendableProps<
  ExtendedProps = {},
  OverrideProps = {}
> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;

export type InheritableElementProps<
  T extends React.ElementType,
  Props = {}
> = ExtendableProps<PropsOf<T>, Props>;

export type MergeWithAs<
  ComponentProps extends object,
  AsProps extends object,
  AdditionalProps extends object = {},
  AsComponent extends As = As
> = ExtendableProps<ComponentProps, AdditionalProps> &
  ExtendableProps<AsProps, AdditionalProps> & {
    as?: AsComponent;
  };

export type ComponentWithAs<Component extends As, Props extends object = {}> = {
  <AsComponent extends As>(
    props: MergeWithAs<
      React.ComponentProps<Component>,
      React.ComponentProps<AsComponent>,
      Props,
      AsComponent
    >
  ): JSX.Element;
};

export type KefasComponent<T extends As, P = {}> = ComponentWithAs<
  T,
  KefasBaseProps & P
>;

export type HTMLKefasProps<T extends As> = Omit<
  PropsOf<T>,
  T extends "svg"
    ? "ref" | "children" | keyof KefasBaseProps
    : "ref" | keyof KefasBaseProps
> & { as?: As } & KefasBaseProps;
