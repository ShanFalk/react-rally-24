export const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];

  export const indexes = [
    {id: 1, name: 'ACCOUNT NUMBER', datapoint: 'Funding Account Number', text_to_use: 'Sample text to use', use_this_data: false},
    {id: 7, name: 'CUSTOM', datapoint: 'Custom datapoint 1', text_to_use: 'Sample text to use', use_this_data: true},
    {id: 8, name: 'CUSTOM', datapoint: 'Custom datapoint 2', text_to_use: 'Sample text to use', use_this_data: true},
];

export const stock = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];

  //hypothetical - measure pull-through rate
export const officers = [
  {full_name: "Person A", funding_authority_group: "Tier3 Funding", pull_through_rate: 0.7},
  {full_name: "Person B", funding_authority_group: "Tier3 Funding", pull_through_rate: 0.63},
  {full_name: "Person C", funding_authority_group: "Tier2 Funding", pull_through_rate: 0.38}
]