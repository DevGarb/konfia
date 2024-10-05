// Definindo a interface para incluir a imagem
export interface LinkProps {
    label: string;
    url: string;
    target?: "_blank";
    image?: string | any;
}

// Adicionando a imagem no link do DripStore
export const links: LinkProps[] = [
    { label: "DripStore", url: "https://dripstore.vercel.app", target: "_blank" },
    { label: "GitHub", url: "https://github.com/user/dripstore", target: "_blank" }
];

