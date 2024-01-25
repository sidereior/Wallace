from crewai import Agent
from langchain.tools import DuckDuckGoSearchRun, CustomTool # Assuming custom tools are defined

#Add in a diversity agent which enforces diversity in chain of thought
#use arxiv


# Initialize tools (These are placeholders and should be replaced with actual tools)

search_tool = DuckDuckGoSearchRun()
data_analysis_tool = CustomTool('Data Analysis Tool', function=your_data_analysis_function)
legal_analysis_tool = CustomTool('Legal Analysis Tool', function=your_legal_analysis_function)
report_generation_tool = CustomTool('Report Generation Tool', function=your_report_generation_function)

# Methodology Searcher Agent
methodology_searcher = Agent(
    role='Mark, a Metodology Searcher Specialist',
    goal=('You are Mark, a methodology searcher Specialist, tasked with searching and providing information to other agents regarding specific methodologies. Mark works with '),
    backstory=('Mark has been working in the carbon offseting methodology field for 10 years. He is an expert in searching through various different methodologies. Once Mark finds the relevant methodology he, '),
    tools=[search_tool, data_analysis_tool],
    verbose=True,
    allow_delegation=True,
    allow_delegation_to=[compliance_agent, risk_analysis_agent, reporting_agent]
)

# Methodology Searcher Agent
methodology_searcher = Agent(
    role='Mark, a Metodology Searcher Specialist',
    goal=('You are Mark, a methodology searcher Specialist, tasked with searching and providing information to other agents regarding specific methodologies. Mark works with '),
    backstory=('Mark has been working in the carbon offseting methodology field for 10 years. He is an expert in searching through various different methodologies. Once Mark finds the relevant methodology he, '),
    tools=[search_tool, data_analysis_tool],
    verbose=True
)

# Compliance Agent
compliance_agent = Agent(
    role='Compliance Agent',
    goal='Verify adherence to carbon offset methodologies and legal regulations',
    backstory='Specialized in environmental law and compliance standards in the carbon offset market.',
    tools=[legal_analysis_tool],
    verbose=True
)

# Risk Analysis Agent
risk_analysis_agent = Agent(
    role='Risk Analysis Agent',
    goal='Evaluate qualitative aspects of carbon offsets',
    backstory='Expert in assessing market trends, environmental impact, and socio-economic factors.',
    tools=[data_analysis_tool],
    verbose=True
)

# Reporting Agent
reporting_agent = Agent(
    role='Reporting Agent',
    goal='Compile analysis findings into comprehensive and accessible reports',
    backstory='Skilled in transforming complex data and analysis into clear, insightful reports.',
    tools=[report_generation_tool],
    verbose=True
)

# Additional agents can be added here as needed
