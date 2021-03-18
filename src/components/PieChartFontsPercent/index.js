import React, { PureComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider';
import {connect} from 'react-redux'
import {
  PieChart, Pie, Sector, Cell, Legend, ResponsiveContainer
} from 'recharts';

import './index.css'
const data = [
  { name: 'Sites', value: 400 },
  { name: 'Redes Sociais', value: 300 },
  { name: 'Plataformas Especializadas', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );

   return (
     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="TextoInsidePie">
       {`${(percent * 100).toFixed(0)}%`}
     </text>
   );

};

class PieChartFontsPercent extends PureComponent {

  render() {
    return (
        <div className="card-linechart-inicio" id="id_unico">
        <div className="legenda">
            <Badge color="secondary">
                <Typography className="tituloCard">Fontes</Typography>
            </Badge>
        </div>
        <Divider />
        {/* <ResponsiveContainer width="99%" height={285} className="responsiveGraph" strokeWidth={1}> */}

            <PieChart width={400} height={285}>
            <Legend className="legenda-pie-chart-fonts-percent"/>
                <Pie
                data={ [
                  { name: 'Sites', value: this.props.CountWeb },
                  { name: 'Redes Sociais', value: this.props.CountRedesSociais },
                  { name: 'Plataformas Especializadas', value: this.props.CountSitesEspecializados },
                ]}
                cx={200}
                cy={100}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                >
                {
                    data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                }
                </Pie>

                

            </PieChart>
            {/* </ResponsiveContainer> */}

        </div>
    );
  }
}


function mapStateToProps(state){
    return{
      CountRedesSociaisConcorrente:state.CountRedesSociaisConcorrente,
      CountRedesSociais: state.CountRedesSociais,
      CountWebConcorrente: state.CountWebConcorrente,
      CountWeb: state.CountWeb,
      CountSitesEspecializados: state.CountSitesEspecializados,
      CountSitesEspecializadosConcorrente: state.CountSitesEspecializadosConcorrente,
    }
  }
  
  export default connect(mapStateToProps)(PieChartFontsPercent)