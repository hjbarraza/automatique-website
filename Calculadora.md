

Calculadora de ROI

## Instalación
npx untitledui add slider
npx untitledui add dropdown
npx untitledui add tooltip
npx untitledui add charts-base



## Uso
import { Slider } from "@/components/base/slider/slider"; 
export const TopFloating = () => {
    return <Slider defaultValue={[0, 25]} labelPosition="top-floating" />;
};


import { ChevronDown, Container, HelpCircle, LayersTwo01, LogOut01, Settings01, User01 } from "@untitledui/icons";
import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
import { Button } from "@/components/base/buttons/button";
import { Dropdown } from "@/components/base/dropdown/dropdown";

export const DropdownButton = () => (
    <Dropdown.Root>
        <Button className="group" color="secondary" iconTrailing={ChevronDown}>
            Account
        </Button>

        <Dropdown.Popover>
            <div className="flex gap-3 border-b border-secondary p-3">
                <AvatarLabelGroup
                    size="md"
                    src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
                    status="online"
                    title="Olivia Rhye"
                    subtitle="olivia@untitledui.com"
                />
            </div>
            <Dropdown.Menu>
                <Dropdown.Section>
                    <Dropdown.Item addon="⌘K->P" icon={User01}>
                        View profile
                    </Dropdown.Item>
                    <Dropdown.Item addon="⌘S" icon={Settings01}>
                        Settings
                    </Dropdown.Item>
                </Dropdown.Section>
                <Dropdown.Separator />
                <Dropdown.Section>
                    <Dropdown.Item icon={LayersTwo01}>Changelog</Dropdown.Item>
                    <Dropdown.Item icon={HelpCircle}>Support</Dropdown.Item>
                    <Dropdown.Item icon={Container}>API</Dropdown.Item>
                </Dropdown.Section>
                <Dropdown.Separator />
                <Dropdown.Section>
                    <Dropdown.Item addon="⌥⇧Q" icon={LogOut01}>
                        Log out
                    </Dropdown.Item>
                </Dropdown.Section>
            </Dropdown.Menu>
        </Dropdown.Popover>
    </Dropdown.Root>
);


import { HelpCircle } from "@untitledui/icons";
import { Tooltip, TooltipTrigger } from "@/components/base/tooltip/tooltip";

export const WithSupportingTextDemo = () => {
    return (
        <Tooltip
            title="This is a tooltip"
            description="Tooltips are used to describe or identify an element. In most scenarios, tooltip help the user understand meaning, function or alt-text."
        >
            <TooltipTrigger className="group relative flex cursor-pointer flex-col items-center gap-2 text-fg-quaternary transition duration-100 ease-linear hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover">
                <HelpCircle className="size-4" />
            </TooltipTrigger>
        </Tooltip>
    );
};







import { Area, AreaChart, CartesianGrid, Label, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartLegendContent, ChartTooltipContent } from "@/components/application/charts/charts-base";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cx } from "@/utils/cx";

const lineData = [
    {
        date: new Date(2025, 0, 1),
        A: 600,
        B: 400,
        C: 100,
    },
    {
        date: new Date(2025, 1, 1),
        A: 620,
        B: 405,
        C: 160,
    },
    {
        date: new Date(2025, 2, 1),
        A: 630,
        B: 400,
        C: 170,
    },
    {
        date: new Date(2025, 3, 1),
        A: 650,
        B: 410,
        C: 190,
    },
    {
        date: new Date(2025, 4, 1),
        A: 600,
        B: 320,
        C: 200,
    },
    {
        date: new Date(2025, 5, 1),
        A: 650,
        B: 430,
        C: 230,
    },
    {
        date: new Date(2025, 6, 1),
        A: 620,
        B: 400,
        C: 200,
    },
    {
        date: new Date(2025, 7, 1),
        A: 750,
        B: 540,
        C: 300,
    },
    {
        date: new Date(2025, 8, 1),
        A: 780,
        B: 490,
        C: 390,
    },
    {
        date: new Date(2025, 9, 1),
        A: 750,
        B: 450,
        C: 300,
    },
    {
        date: new Date(2025, 10, 1),
        A: 780,
        B: 480,
        C: 340,
    },
    {
        date: new Date(2025, 11, 1),
        A: 820,
        B: 500,
        C: 450,
    },
];

export const LineChart02 = () => {
    const isDesktop = useBreakpoint("lg");

    const colors: Record<string, string> = {
        A: "text-utility-brand-600",
        B: "text-utility-brand-400",
        C: "text-utility-brand-700",
    };

    return (
        <div className="flex h-60 flex-col gap-2">
            <ResponsiveContainer className="h-full">
                <AreaChart
                    data={lineData}
                    className="text-tertiary [&_.recharts-text]:text-xs"
                    margin={{
                        left: 5,
                        right: 5,
                        top: isDesktop ? 12 : 6,
                        bottom: isDesktop ? 16 : 0,
                    }}
                >
                    <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="currentColor" className="text-utility-brand-700" stopOpacity="0.7" />
                            <stop offset="95%" stopColor="currentColor" className="text-utility-brand-700" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    <CartesianGrid vertical={false} stroke="currentColor" className="text-utility-gray-100" />

                    <Legend
                        verticalAlign="top"
                        align="right"
                        layout={isDesktop ? "vertical" : "horizontal"}
                        content={<ChartLegendContent className="-translate-y-2" />}
                    />

                    <XAxis
                        fill="currentColor"
                        axisLine={false}
                        tickLine={false}
                        interval="preserveStartEnd"
                        dataKey="date"
                        tickFormatter={(value) => value.toLocaleDateString(undefined, { month: "short" })}
                        padding={{ left: 10, right: 10 }}
                    >
                        {isDesktop && (
                            <Label fill="currentColor" className="!text-xs font-medium max-lg:hidden" position="bottom">
                                Month
                            </Label>
                        )}
                    </XAxis>

                    <YAxis
                        fill="currentColor"
                        axisLine={false}
                        tickLine={false}
                        interval="preserveStartEnd"
                        tickFormatter={(value) => Number(value).toLocaleString()}
                    >
                        <Label
                            value="Active users"
                            fill="currentColor"
                            className="!text-xs font-medium"
                            style={{ textAnchor: "middle" }}
                            angle={-90}
                            position="insideLeft"
                        />
                    </YAxis>

                    <Tooltip
                        content={<ChartTooltipContent />}
                        formatter={(value) => Number(value).toLocaleString()}
                        labelFormatter={(value) => value.toLocaleDateString(undefined, { month: "short", year: "numeric" })}
                        cursor={{
                            className: "stroke-utility-brand-600 stroke-2",
                        }}
                    />

                    <Area
                        isAnimationActive={false}
                        className={cx(colors["A"], "[&_.recharts-area-area]:translate-y-[6px] [&_.recharts-area-area]:[clip-path:inset(0_0_6px_0)]")}
                        dataKey="A"
                        name="Series 1"
                        type="monotone"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="url(#gradient)"
                        fillOpacity={0.1}
                        activeDot={{
                            className: "fill-bg-primary stroke-utility-brand-600 stroke-2",
                        }}
                    />

                    <Area
                        isAnimationActive={false}
                        className={cx(colors["B"], "[&_.recharts-area-area]:translate-y-[6px] [&_.recharts-area-area]:[clip-path:inset(0_0_6px_0)]")}
                        dataKey="B"
                        name="Series 2"
                        type="monotone"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeDasharray="0.1 8"
                        strokeLinecap="round"
                        activeDot={{
                            className: "fill-bg-primary stroke-utility-brand-600 stroke-2",
                        }}
                    />

                    <Area
                        isAnimationActive={false}
                        className={cx(colors["C"], "[&_.recharts-area-area]:translate-y-[6px] [&_.recharts-area-area]:[clip-path:inset(0_0_6px_0)]")}
                        dataKey="C"
                        name="Series 3"
                        type="monotone"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeDasharray="0.1 8"
                        strokeLinecap="round"
                        activeDot={{
                            className: "fill-bg-primary stroke-utility-brand-600 stroke-2",
                        }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};



### 1. Campos de entrada esenciales

| Campo                                | Qué pide                                      | Por qué importa                                       |
| ------------------------------------ | --------------------------------------------- | ----------------------------------------------------- |
| **Horas operativas/mes**             | Total de horas en tareas repetitivas          | Base para estimar tiempo‑dinero ahorrado              |
| **Tasa de error humano (%)**         | % promedio de iteraciones con error           | Permite calcular costos por correcciones y retrabajos |
| **Horas de ejecutivos/gerentes/mes** | Tiempo de seguimiento, aprobaciones, reportes | Mide impacto en personal de alto costo                |

> Tip UX: precarga valores sugeridos por industria y deja `?` tooltips con ejemplos.

---

### 2. Fórmulas rápidas

1. **Costo hora operativa** = sueldo mensual / horas mensuales (usa valor editable).
2. **Ahorro por automatizar** = horas operativas × costo hora × % eficiencia (ej. 70 %).
3. **Costo de errores** = (tasa error × nº transacciones) × costo medio por error.
4. **Ahorro en liderazgo** = horas ejecutivos × costo hora ejecutivo × % reducción (ej. 50 %).
5. **ROI %** = (ahorro total – costo Automatique) / costo Automatique × 100.
6. **Payback (meses)** = costo Automatique / ahorro mensual.

---

### 3. Salidas que muestra

* **Horas totales liberadas** (operativos + liderazgo)
* **US\$ ahorrados mensuales y anuales**
* **Errores eliminados y costo evitado**
* **ROI %** y **punto de equilibrio** en meses
* **Gráfica “cash‑flow acumulado”** (línea recta vs curva Automatique)

---

### 4. Comparativas pre‑armadas

* **Estado actual** (manual)
* **Automatique Starter / Pro / Enterprise** (usa tu pricing)
* **Desarrollo in‑house** (benchmark de costo de dev + mantenimiento)

---

### 5. Conversión

* CTA “Habla con un Experto” con los datos de la simulación adjuntos.
* Opción de descargar PDF con los números y un mini‑caso de éxito (DCR Project).

Con esto la calculadora se enfoca justo donde más duele: tiempo operativo, errores y horas caras de dirección.


FOR ANY Component missing favour UntitledUI React Components (remember that)
https://www.untitledui.com/react/components/ 