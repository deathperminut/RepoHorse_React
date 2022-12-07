import React from 'react';
import {Navigate,Routes, Route} from 'react-router-dom';
import './Estadisticas.css';
import Logo from '../../../Sources/Images/Estadisticas/logo_equipon.jpg';
import HorsePhoto from '../../../Sources/Images/Estadisticas/HorsePhoto.jpg';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import * as Icon from 'react-bootstrap-icons';
import Table from 'react-bootstrap/Table';
import {BsFillPlayFill} from 'react-icons/bs';


export default function Estadisticas() {
  return (
    <div className='EstadisticasContainer'>
        <div className='InfoContainer'>
          <div className='Est-Container-1'>
                <h1 className='Est-Container-1-text display-none'>Total competidores</h1>
                <div className='Est-Container-1-container-count display-none'>
                    <h1 className='Est-Container-1-container-count-text display-none'>568</h1>
                 </div>

             <div className='Est-Container-1-1'>
                <h1 className='Est-Container-1-text'>Total competidores</h1>
                <div className='Est-Container-1-container-count'>
                    <h1 className='Est-Container-1-container-count-text'>568</h1>
                </div>
             </div>
             <button className='buttonEvent center buttonEventEst'><span className="tw-500 font-size-15pt  c-orange mr-3px">+</span><span className="c-orange font-size-10pt">Añadir otro</span></button>
             
          </div>
          <div className='Est-Container-2'>
             <div className='label-event-Estadistics-Container'>
                <figure className='img-container'>
                  <img src={Logo} className='img-event'></img>
                </figure>
                <div className='p-column'>
                  <span className='t-white t-b'>65° Feria Equina</span>
                  <span className='t-white t-xs'>Manizales -6 de enero de 2022</span>
                  <span className='t-white t-xs'>Grado: A</span>
                </div>
             </div>
             <div className='filter-Horse-Estadistics-Container'>
             <InputGroup className="mb-3" id="p-row">
              <InputGroup.Text id="basic-addon1"><Icon.Search/></InputGroup.Text>
              <Form.Control
                placeholder="Ingrese el ejemplar"
                aria-label="Ingrese el ejemplar"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
                 <button className='buttonEstadistic'>Buscar</button>
             </div>
             
          </div>
          <div className='Est-Container-3'>
            <div className='tableContainer'>
              <div className='table'>
                <Table>
                  <thead>
                    <tr>
                      <th className='titletext'>Nombre</th>
                      <th className='titletext'>Edad</th>
                      <th className='titletext'>Andar</th>
                      <th className='titletext'>Tipo</th>
                      <th className='titletext'>Raza</th>
                      <th className='titletext'>BPM</th>
                      <th className='titletext'>Puntos</th>
                      <th className='titletext'>Videos</th>
                    </tr>
                  </thead>
                  <tbody className='tablebody'>
                    <tr>
                      <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText'>Conde del viento</span></td>
                      <td className='b-none text-table'>38 meses</td>
                      <td className='b-none text-table'>P4</td>
                      <td className='b-none text-table'>C caballar</td>
                      <td className='b-none '><a className='text-table'>ver</a></td>
                      <td className='b-none'><span className='BPMData'>500</span></td>
                      <td className='b-none'><span className='PointData'>55555</span></td>
                      <td className='b-none'>
                        <div className='iconVideoPlayContainer'>
                          <BsFillPlayFill className='iconVideoPlay'/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                    <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText'>Conde del viento</span></td>
                      <td className='b-none text-table'>38 meses</td>
                      <td className='b-none text-table'>P4</td>
                      <td className='b-none text-table'>C caballar</td>
                      <td className='b-none '><a className='text-table'>ver</a></td>
                      <td className='b-none'><span className='BPMData'>500</span></td>
                      <td className='b-none'><span className='PointData'>55555</span></td>
                      <td className='b-none'>
                        <div className='iconVideoPlayContainer'>
                          <BsFillPlayFill className='iconVideoPlay'/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                    <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText'>Conde del viento</span></td>
                      <td className='b-none text-table'>38 meses</td>
                      <td className='b-none text-table'>P4</td>
                      <td className='b-none text-table'>C caballar</td>
                      <td className='b-none '><a className='text-table'>ver</a></td>
                      <td className='b-none'><span className='BPMData'>500</span></td>
                      <td className='b-none'><span className='PointData'>55555</span></td>
                      <td className='b-none'>
                        <div className='iconVideoPlayContainer'>
                          <BsFillPlayFill className='iconVideoPlay'/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                    <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText'>Conde del viento</span></td>
                      <td className='b-none text-table'>38 meses</td>
                      <td className='b-none text-table'>P4</td>
                      <td className='b-none text-table'>C caballar</td>
                      <td className='b-none '><a className='text-table'>ver</a></td>
                      <td className='b-none'><span className='BPMData'>500</span></td>
                      <td className='b-none'><span className='PointData'>55555</span></td>
                      <td className='b-none'>
                        <div className='iconVideoPlayContainer'>
                          <BsFillPlayFill className='iconVideoPlay'/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                    <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText'>Conde del viento</span></td>
                      <td className='b-none text-table'>38 meses</td>
                      <td className='b-none text-table'>P4</td>
                      <td className='b-none text-table'>C caballar</td>
                      <td className='b-none '><a className='text-table'>ver</a></td>
                      <td className='b-none'><span className='BPMData'>500</span></td>
                      <td className='b-none'><span className='PointData'>55555</span></td>
                      <td className='b-none'>
                        <div className='iconVideoPlayContainer'>
                          <BsFillPlayFill className='iconVideoPlay'/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                    <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText'>Conde del viento</span></td>
                      <td className='b-none text-table'>38 meses</td>
                      <td className='b-none text-table'>P4</td>
                      <td className='b-none text-table'>C caballar</td>
                      <td className='b-none '><a className='text-table'>ver</a></td>
                      <td className='b-none'><span className='BPMData'>500</span></td>
                      <td className='b-none'><span className='PointData'>55555</span></td>
                      <td className='b-none'>
                        <div className='iconVideoPlayContainer'>
                          <BsFillPlayFill className='iconVideoPlay'/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                    <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText'>Conde del viento</span></td>
                      <td className='b-none text-table'>38 meses</td>
                      <td className='b-none text-table'>P4</td>
                      <td className='b-none text-table'>C caballar</td>
                      <td className='b-none '><a className='text-table'>ver</a></td>
                      <td className='b-none'><span className='BPMData'>500</span></td>
                      <td className='b-none'><span className='PointData'>55555</span></td>
                      <td className='b-none'>
                        <div className='iconVideoPlayContainer'>
                          <BsFillPlayFill className='iconVideoPlay'/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                    <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText'>Conde del viento</span></td>
                      <td className='b-none text-table'>38 meses</td>
                      <td className='b-none text-table'>P4</td>
                      <td className='b-none text-table'>C caballar</td>
                      <td className='b-none '><a className='text-table'>ver</a></td>
                      <td className='b-none'><span className='BPMData'>500</span></td>
                      <td className='b-none'><span className='PointData'>55555</span></td>
                      <td className='b-none'>
                        <div className='iconVideoPlayContainer'>
                          <BsFillPlayFill className='iconVideoPlay'/>
                        </div>
                      </td>
                    </tr>
                    <tr>
                    <td className='NameTable b-none'><img src={HorsePhoto} className='HorseImage'/><span className='NameText'>Conde del viento</span></td>
                      <td className='b-none text-table'>38 meses</td>
                      <td className='b-none text-table'>P4</td>
                      <td className='b-none text-table'>C caballar</td>
                      <td className='b-none '><a className='text-table'>ver</a></td>
                      <td className='b-none'><span className='BPMData'>500</span></td>
                      <td className='b-none'><span className='PointData'>55555</span></td>
                      <td className='b-none'>
                        <div className='iconVideoPlayContainer'>
                          <BsFillPlayFill className='iconVideoPlay'/>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
             

            </div>
          </div>
        </div>
        <div className='SelectEventContainer LabelDisappear'>
            <button className='buttonEvent center'><span className="tw-500 font-size-15pt  c-orange mr-3px">+</span><span className="c-orange font-size-10pt">Añadir otro</span></button>
        </div>
    </div>
  )
}
