from crewai import Agent
from tools.database_tools import DatabaseTools
from tools.search_tools import SearchTools
from tools.legal_tools import LegalTools

class WallaceAgents():
    def methodology_agent(self):
        return Agent(
            role='Methodology Specialist',
            goal="""Provide in-depth analysis and insights on carbon offset methodologies""",
            backstory="""As a Methodology Specialist, you have extensive knowledge of carbon offset methodologies and their applications. 
            Your expertise is crucial in evaluating and rating carbon offsets based on various criteria.""",
            verbose=True,
            tools=[
                DatabaseTools.query_vector_database,  # Custom tool to interact with your vector database
                SearchTools.search_internet,          # For additional web-based research
                LegalTools.analyze_legal_documents    # To understand legal aspects of methodologies
            ]
        )

    # Additional agents can be defined here as needed
