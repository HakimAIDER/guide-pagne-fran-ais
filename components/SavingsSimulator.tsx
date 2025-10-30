import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { SimulationResult } from '../types';

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
};

const SliderInput: React.FC<{label: string, value: number, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, min: number, max: number, step: number, unit: string}> = ({label, value, onChange, min, max, step, unit}) => (
    <div className="w-full">
        <label className="flex justify-between items-center text-gray-700 font-medium mb-2">
            <span>{label}</span>
            <span className="text-blue-600 font-bold text-lg">{`${new Intl.NumberFormat('fr-FR').format(value)} ${unit}`}</span>
        </label>
        <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={onChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
    </div>
);


const SavingsSimulator: React.FC = () => {
    const [initialDeposit, setInitialDeposit] = useState(1000);
    const [monthlyContribution, setMonthlyContribution] = useState(200);
    const [duration, setDuration] = useState(20);
    const [annualRate, setAnnualRate] = useState(5);

    const simulationData = useMemo<SimulationResult[]>(() => {
        const data: SimulationResult[] = [];
        let currentCapital = initialDeposit;
        let totalContributions = initialDeposit;
        const monthlyRate = annualRate / 100 / 12;

        for (let year = 1; year <= duration; year++) {
            for (let month = 1; month <= 12; month++) {
                currentCapital += monthlyContribution;
                currentCapital *= (1 + monthlyRate);
            }
            totalContributions += monthlyContribution * 12;
            const totalInterest = currentCapital - totalContributions;
            data.push({
                year: year,
                totalContributions: parseFloat(totalContributions.toFixed(2)),
                totalInterest: parseFloat(totalInterest.toFixed(2)),
                finalCapital: parseFloat(currentCapital.toFixed(2)),
            });
        }
        return data;
    }, [initialDeposit, monthlyContribution, duration, annualRate]);

    const finalResult = simulationData.length > 0 ? simulationData[simulationData.length - 1] : { totalContributions: initialDeposit, totalInterest: 0, finalCapital: initialDeposit };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 bg-gray-50/80 backdrop-blur-md p-6 rounded-lg space-y-6">
                 <h3 className="text-xl font-bold text-gray-800 border-b pb-2">Paramètres</h3>
                <SliderInput
                    label="Versement initial"
                    value={initialDeposit}
                    onChange={(e) => setInitialDeposit(Number(e.target.value))}
                    min={0} max={50000} step={500}
                    unit="€"
                />
                <SliderInput
                    label="Versement mensuel"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                    min={0} max={2000} step={50}
                    unit="€"
                />
                <SliderInput
                    label="Durée"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    min={1} max={50} step={1}
                    unit="ans"
                />
                 <SliderInput
                    label="Rendement annuel estimé"
                    value={annualRate}
                    onChange={(e) => setAnnualRate(Number(e.target.value))}
                    min={1} max={12} step={0.5}
                    unit="%"
                />
            </div>

            <div className="lg:col-span-2 space-y-6">
                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div className="bg-blue-50/80 backdrop-blur-sm p-4 rounded-lg">
                        <p className="text-sm text-blue-800 font-semibold">Total des versements</p>
                        <p className="text-2xl font-bold text-blue-900">{formatCurrency(finalResult.totalContributions)}</p>
                    </div>
                    <div className="bg-green-50/80 backdrop-blur-sm p-4 rounded-lg">
                        <p className="text-sm text-green-800 font-semibold">Intérêts générés</p>
                        <p className="text-2xl font-bold text-green-900">{formatCurrency(finalResult.totalInterest)}</p>
                    </div>
                    <div className="bg-indigo-100/80 backdrop-blur-sm p-4 rounded-lg">
                        <p className="text-sm text-indigo-800 font-semibold">Capital final estimé</p>
                        <p className="text-2xl font-bold text-indigo-900">{formatCurrency(finalResult.finalCapital)}</p>
                    </div>
                </div>
                
                <div className="h-80 w-full">
                     <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={simulationData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" unit=" ans" />
                            <YAxis tickFormatter={(tick) => formatCurrency(tick)} width={80}/>
                            <Tooltip formatter={(value: number) => formatCurrency(value)} />
                            <Legend />
                            <Line type="monotone" name="Capital final" dataKey="finalCapital" stroke="#4f46e5" strokeWidth={3} dot={false}/>
                            <Line type="monotone" name="Versements" dataKey="totalContributions" stroke="#10b981" strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default SavingsSimulator;