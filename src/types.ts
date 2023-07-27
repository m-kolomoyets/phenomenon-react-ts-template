export type ObjValues<T> = T[keyof T];

export type WithClassName<T> = T & {
    /**
        Extendable classnames of component
    */
    className?: string;
};

export type WithChildren<T> = T & {
    /**
        The content of the component.
    */
    children?: React.ReactNode;
};

export type FCProps<T> = WithClassName<WithChildren<T>>;

export type ObjectOfStringsType = {
    [key: string]: string;
};

export type SetStateValue<T> = React.Dispatch<React.SetStateAction<T>>;
