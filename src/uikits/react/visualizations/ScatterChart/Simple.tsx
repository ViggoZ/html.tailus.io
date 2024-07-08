import { ResponsiveContainer, ScatterChart, Scatter, Tooltip, CartesianGrid } from 'recharts';
import { data } from "./../data"
import { area, cartesianGrid } from "@tailus/themer";
import Custom from "@components/examples/Tooltip";

export const SimpleScatterChart = () => {
    return (
        <div className="h-72 max-w-xl w-full" data-shade="900">
            <ResponsiveContainer width="100%" height="100%">
                <ScatterChart data={data}>

                    <Tooltip
                        cursor={{ stroke: 'var(--ui-border-color)', strokeWidth: 1 }}
                        content={
                            <Custom payload={[]} active fancy label={""}/>
                        }
                    />

                    <CartesianGrid
                        className={cartesianGrid()}
                        stroke="currentColor"
                        strokeDasharray={3}
                    />

                    <Scatter className={area({ gradient:true, intent: "secondary" })} fill="currentColor" dataKey="Primary" />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    )
}

export const simpleScatterChartCode = [{
    code: `import { CustomTooltip } from "@tailus-ui/visualizations";
import { ResponsiveContainer, ScatterChart, Scatter, Tooltip, CartesianGrid } from 'recharts';
import { area, cartesianGrid } from "@tailus/themer";

const data = [];

export const ScatterOverview = () => {
    return (
        <div className="h-72 max-w-xl w-full" data-shade="900">
            <ResponsiveContainer width="100%" height="100%">
                <ScatterChart data={data}>

                    <Tooltip
                        cursor={{ stroke: 'var(--ui-border-color)', strokeWidth: 1 }}
                        content={
                            <CustomTooltip payload={[]} active fancy label={""}/>
                        }
                    />

                    <CartesianGrid
                        className={cartesianGrid()}
                        stroke="currentColor"
                        strokeDasharray={3}
                    />

                    <Scatter className={area({ gradient:true, intent: "secondary" })} fill="currentColor" dataKey="Primary" />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    )
}`,
    lang : "tsx"
}]