export const getRefactorElements = (elements) => {
    return elements?.map(t => ({...t, label: t.title}));
}