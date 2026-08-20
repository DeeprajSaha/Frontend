import { Tooltip } from "@/components/Tooltip/Tooltip";
import { Button } from "@/components/Button";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const TooltipPage = () => {
    const defaultTooltip = `import { Tooltip } from "@/components/Tooltip/Tooltip";

      <Tooltip content="This is a tooltip">
        <Button>Hover me</Button>
      </Tooltip>
    `;

    const topTooltip = `import { Tooltip } from @/components/Tooltip/Tooltip";

             <Tooltip content="Top tooltip" position="top">
                <Button>Top</Button>
            </Tooltip>`;

    const bottomTooltip = `import { Tooltip } from @/components/Tooltip/Tooltip";
    
            <Tooltip content="Bottom tooltip" position="bottom">
                <Button>Bottom</Button>
            </Tooltip>`;

    const leftTooltip = `import { Tooltip } from @/components/Tooltip/Tooltip";
    
            <Tooltip content="Left tooltip" position="left">
                <Button>Left</Button>
            </Tooltip>`;

    const rightTooltip = `import { Tooltip } from @/components/Tooltip/Tooltip";

            <Tooltip content="Right tooltip" position="right">
                <Button>Right</Button>
            </Tooltip>`;

    const propsData = [
        {
            prop: "content",
            type: "string",
            default: "-",
            description: "The text displayed inside the tooltip.",
        },
        {
            prop: "position",
            type: `"top" | "bottom" | "left" | "right"`,
            default: `"top"`,
            description:
                "Controls the position of the tooltip relative to its trigger.",
        },
        {
            prop: "variant",
            type: `"dark" | "light"`,
            default: `"dark"`,
            description: "Controls the visual style of the tooltip.",
        },
        {
            prop: "children",
            type: "React.ReactNode",
            default: "-",
            description:
                "The element that triggers the tooltip when hovered or focused.",
        },
        {
            prop: "className",
            type: "string",
            default: "-",
            description: "Additional custom classes applied to the tooltip.",
        },
    ];

    return (
        <div className="max-w-4xl mx-auto p-4 space-y-12">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Tooltip</h1>

                <p className="text-xl text-gray-600">
                    A tooltip displays additional information when the user
                    hovers over or focuses on an element.
                </p>
            </div>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Usage</h2>

                <div className="flex flex-col gap-10">
                    <ComponentDemo code={defaultTooltip}>
                        <div className="flex justify-center py-10">
                            <Tooltip content="This is a tooltip">
                                <Button>Hover me</Button>
                            </Tooltip>
                        </div>
                    </ComponentDemo>

                    <ComponentDemo code={topTooltip}>
                        <div className="flex justify-center py-10">
                            <Tooltip content="Top tooltip" position="top">
                                <Button>Top</Button>
                            </Tooltip>
                        </div>
                    </ComponentDemo>

                    <ComponentDemo code={bottomTooltip}>
                        <div className="flex justify-center py-10">
                            <Tooltip content="Bottom tooltip" position="bottom">
                                <Button>Bottom</Button>
                            </Tooltip>
                        </div>
                    </ComponentDemo>

                    <ComponentDemo code={leftTooltip}>
                        <div className="flex justify-center py-10">
                            <Tooltip content="Left tooltip" position="left">
                                <Button>Left</Button>
                            </Tooltip>
                        </div>
                    </ComponentDemo>

                    <ComponentDemo code={rightTooltip}>
                        <div className="flex justify-center py-10">
                            <Tooltip content="Right tooltip" position="right">
                                <Button>Right</Button>
                            </Tooltip>
                        </div>
                    </ComponentDemo>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Variants</h2>

                <div className="flex flex-col gap-10">
                    <ComponentDemo
                        code={`<Tooltip
                            content="Dark tooltip"
                            variant="dark"
                            >
                            <Button>Dark</Button>
                            </Tooltip>`}
                    >
                        <div className="flex justify-center py-10">
                            <Tooltip content="Dark tooltip" variant="dark">
                                <Button>Dark</Button>
                            </Tooltip>
                        </div>
                    </ComponentDemo>

                    <ComponentDemo
                        code={`<Tooltip
                            content="Light tooltip"
                            variant="light"
                            >
                            <Button>Light</Button>
                            </Tooltip>`}
                    >
                        <div className="flex justify-center py-10">
                            <Tooltip content="Light tooltip" variant="light">
                                <Button>Light</Button>
                            </Tooltip>
                        </div>
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

export default TooltipPage;
