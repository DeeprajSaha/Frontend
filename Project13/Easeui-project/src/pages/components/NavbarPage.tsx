import { Navbar } from "@/components/navbar";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
const NavbarPage = () => {
    // const usageCode = `import ComponentDemo from "../ComponentsDemo";
    //     <Navbar />`;

    const usageCode = `import {Navbar} from "@/components/navbar/Navbar"
    <Navbar />`;

    const darkNavbarCode = `import { Navbar } from "@/components/navbar/Navbar";

<Navbar variant="dark" />`;

    const primaryNavbarCode = `import { Navbar } from "@/components/navbar/Navbar";

<Navbar variant="primary" />`;
    const glassNavbarCode = `import { Navbar } from "@/components/navbar/Navbar";

<Navbar variant="glass" />`;

    const propsData = [
        {
            prop: "variant",
            type: `"light" | "dark" | "primary" | "glass"`,
            default: `"light"`,
            description: "The visual style of the navbar.",
        },
        {
            prop: "size",
            type: `"default" | "sm" | "lg" | "xl"`,
            default: `"default"`,
            description: "Controls the height of the navbar.",
        },
        {
            prop: "animation",
            type: `"fadeIn" | ...`,
            default: `"fadeIn"`,
            description: "Entrance animation applied when the navbar mounts.",
        },
        {
            prop: "hoverAnimation",
            type: `"none" | ...`,
            default: `"none"`,
            description: "Animation applied when hovering over the navbar.",
        },
        {
            prop: "asChild",
            type: "boolean",
            default: "false",
            description: "Renders the navbar using the Radix Slot component.",
        },
        {
            prop: "className",
            type: "string",
            default: "-",
            description: "Additional custom classes.",
        },
    ];

    return (
        <div className="max-w-4xl mx-auto p-4 space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Nav</h1>
                <p className="text-xl text-gray-600">
                    The Navbar component provides a flexible navigation bar for
                    organizing links, branding, and actions.
                </p>
            </div>
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Usage</h2>
                <div className="flex flex-col gap-20">
                    <ComponentDemo code={usageCode}>
                        <Navbar />
                    </ComponentDemo>

                    <ComponentDemo code={darkNavbarCode}>
                        <Navbar variant="dark" />
                    </ComponentDemo>

                    <ComponentDemo code={primaryNavbarCode}>
                        <Navbar variant="primary" />
                    </ComponentDemo>

                    <ComponentDemo code={glassNavbarCode}>
                        <Navbar variant="glass" />
                    </ComponentDemo>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">
                            API Reference
                        </h2>
                        <PropsTable data={propsData} />
                    </section>
                </div>
            </section>
        </div>
    );
};

export default NavbarPage;
